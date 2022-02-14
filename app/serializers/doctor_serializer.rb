class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :field, :number, :address, :rating
end
