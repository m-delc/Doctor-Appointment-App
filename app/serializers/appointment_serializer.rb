class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :time, :date
  has_one :doctor
end
