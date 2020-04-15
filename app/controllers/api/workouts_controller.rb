class Api::WorkoutsController < ApplicationController

    def index
        @workouts = Workout.all.where(user_id: current_user.id)
        render :index
    end

    def show
        @workout = Workout.find(params[:id])
        render 'api/workouts/show'
    end
    
    def create
        @workout = Workout.new(workout_params)

        if @workout.save
            render 'api/workouts/show'
        else
            render json: @workout.errors.full_messages, status: 422
        end
    end



    def update
        @workout = Workout.find_by(id: params[:id])

        if @workout.update(workout_params)
            render :show
        else
            render json: @workout.errors.full_messages, status: 422
        end
    end


    def destroy
        @workout = Workout.find(params[:id])
        if @workout
            destroy(@workout)
        else
            render json: ["Workout doesn't exist"], status: 422
        end
    end

    private

    def workout_params
        params.require(:workout).permit(:title, :date, :time, :sport, :description, :distance, :user_id)
    end

end