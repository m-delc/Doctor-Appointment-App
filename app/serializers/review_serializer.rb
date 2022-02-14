class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :doctor_review
  has_one :doctor
end
