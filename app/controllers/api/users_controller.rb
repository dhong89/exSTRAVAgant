class Api::UsersController < ApplicationController
skip_before_action :verify_authenticity_token

    def create
        @user = User.new(users_params)
        if @user.save 
            log_in(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end

    end


    def users_params 
        params.require(:user).permit(:username, :email, :first_name, :last_name, :password)
    end
end
