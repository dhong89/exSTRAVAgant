class Api::RoutesController < ApplicationController

    def index
        # @routes = Route.all.where(athlete_id: current_user.id)
        # @routes = current_user.routes

        if params[:current_user_route]
           
            @routes = current_user.routes
        else
           
            @routes = Route.all
        end
        
        render :index
    end


    def show
        @route = Route.find(params[:id])

        render :show
    end

    def create
        @route = Route.new(route_params)
# debugger
        if @route.save
            render :show
        else
            render json: @route.errors.full_messages, status: 422
        end
    end


    def destroy
        @route = Route.find(params[:id])
        
        if @route   
            @route.destroy
        else
            render json:['This route does not exist'], status: 422
        end
    end


private

    def route_params
        params.require(:route).permit(:route_name, :distance, :elevation, :estimated_move_time, :athlete_id, :transportation, :image_url)
    end

end