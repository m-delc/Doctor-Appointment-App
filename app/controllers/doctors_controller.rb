class DoctorsController < ApplicationController
    # skip_before_action :authorize_user, only: [:index]

    def index
        doctors = Doctor.all.order(rating: :desc)
        render json: doctors, status: :ok
    end
    
end
