class Api::UsersController < ApplicationController
  
  def index

  end

  def show

  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update

  end

  private
  def user_params
  params.require(:user).permit(:username, :email, :password)
  end
end
