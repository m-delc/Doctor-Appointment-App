require "faker"


fields = ["Allergy and Immunology", "Anesthesiology", "Dermatology", "Diagnostic Radiology", "Emergency Medicine", "Family Medicine", "Internal Medicine", "Medical Genetics", "Neurology", "Nuclear Medicine", "Obstetrics and Gynecology","Ophthalmology","Pathology","Pediatrics","Physical Medicine and Rehabilitation","Preventive Medicine","Psychiatry","Radiation Oncology","Surgery","Urology"]


100.times do
    Doctor.create!(
      name: Faker::Name.name,
      field: fields.sample,
      number: Faker::PhoneNumber.phone_number,
      address: Faker::Address.full_address,
      rating: Faker::Number.between(from: 1, to: 5)
    )
end

puts "Done Seeding"
