class User < ApplicationRecord
    has_secure_password
    has_many :appointments
    has_many :doctors, through: :appointments

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
end
