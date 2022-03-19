class Api::SessionsController < ApplicationController
  def create
    # Find user by credentials
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['The username or password is incorrect.'], status: 401
    else
      login!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    @user = current_user
    if @user
      render json: {}
      logout!
    else
      render json: ['No current user to log out'], status: 401
    end
  end
end
