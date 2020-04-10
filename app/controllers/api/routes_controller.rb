class API::ROutesController < ApplicationController

    def index
        @routes = Route.all.where(athlete_id: current_user.id)
        render :index
    end


    def show
        @route = Route.find(params[:id])

        render :show
    end

    def create
        @route = Route.new(params[:id])

        if @route.save
            render :show
        else
            render json: @route.errors.full_messages, status: 422
        end
    end


    def destroy
        @route = Route.find_by(route_name: route_name, athlete_id: athlete_id)
        
        if @route   
            @route.destroy
        else
            render json:['This route does not exists'], status: 422
        end
    end


private

    def route_params
        params.require(:route).permit(:route_name, :distance, :elevation, :coordinates, :estimated_move_time, :athlete_id, :transportation)
    end

end