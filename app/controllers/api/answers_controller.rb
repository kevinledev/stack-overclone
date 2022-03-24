class Api::AnswersController < ApplicationController

  def index
    if params[:user_id]
      @answers = User.find(params[:user_id]).answers
    elsif params[:question_id]
      @answers = Question.find(params[:question_id]).answers
    # @answers = Answer.find_by(question_id: params[:question_id])
    end 
    render :index
  end
  
  def create 
    @answer = Answer.new(answer_params)

    user = current_user
    @answer.answerer_id = user.id

    if @answer.save!
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def update
    @answer = Answer.find(params[:id])
    editor = current_user
    if @answer && @answer.answerer_id == editor.id
      @answer.update(answer_params)
      render :show
    else
      render json: @answer.errors.full_messages, status: 401
    end
  end

  def destroy
    @answer = Answer.find(params[:id])
    user = current_user
    if @answer && @answer.answerer_id == user.id
      @answer.destroy!
    else
      render json: @answer.errors.full_messages, status: 401
    end
  end

  private
  def answer_params
    params.require(:answer).permit(:body, :question_id)
  end
end
