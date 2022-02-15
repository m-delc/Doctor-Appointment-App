class AppointmentsController < ApplicationController

    def index
        user = User.find_by(id: session[:current_user])
        appointments = user.appointments
        render json: appointments, status: :ok
    end

    def create 
        user = User.find_by(id: session[:current_user])
        appointment = user.appointments.create(appointment_params)

        if appointment.valid?
            render json: appointment, status: :created
        else
            render json: {errors: appointment.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        appointment = Appointment.find_by(id: params[:id])
        appointment.update(appointment_params)

        if appointment.valid?
            render json: appointment, status: :accepted
        else
            render json: {errors: appointment.errors.full_messages}, status: :unprocessable_entity
        end

    end

    def destroy
        appointment = Appointment.find_by(id: params[:id])
        appointment.destroy
        render json: {}, status: :no_content
    end

    private 

    def appointment_params
        params.permit(:time, :date, :doctor_id)
    end
    
end
