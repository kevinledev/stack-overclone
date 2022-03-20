class Api::QuestionsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def index
    @questions = Question.all
    render :index
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
      # redirect_to api_questions_url
      # redirect somewhere 
    else
      render json: @question.errors.full_messages, status: 401
    end
  end

  private
  def question_params
    params.require(:question).permit(:title, :body)
  end
end
