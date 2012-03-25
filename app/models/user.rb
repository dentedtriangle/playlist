class User
  include Mongoid::Document
  field :email, :type => String

  embeds_many :lists
end