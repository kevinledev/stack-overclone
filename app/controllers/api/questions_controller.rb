class Api::QuestionsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def index
    if params[:searchField]
      @questions = []
      questions = Question.all
      questions.each do |question|
        if question.body.downcase.include?(params[:searchField].downcase) || question.title.downcase.include?(params[:searchField].downcase)
          @questions << question
        end
      end
    else
      @questions = Question.all
      render :index
    end
  end

  def show
    @question = Question.find(params[:id])
    if @question
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def create 
    @question = Question.new(question_params)

    user = current_user
    @question.asker_id = user.id

    if @question.save!
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update
    @question = Question.find(params[:id])
    editor = current_user
    if @question && @question.asker_id == editor.id
      @question.update(question_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 401
    end
  end

  def destroy
    @question = Question.find(params[:id])
    user = current_user
    if @question && @question.asker_id == user.id
      @question.destroy!
    else
      render json: @question.errors.full_messages, status: 401
    end
  end

  def vote(val)
    @question = Question.find(params[:id])
    @vote = @question.votes.find_or_initialize_by(voter: current_user)
    @vote.update(value: val)
    render :show
  end

  def downvote
    vote(-1)

  end

  def upvote
    vote(1)

  end

  def unvote 
    @question = Question.find(params[:id])
    @vote = @question.votes.find_by(voter: current_user)
    @vote.destroy!
    render :show
  end

  private
  def question_params
    params.require(:question).permit(:title, :body)
  end
end
