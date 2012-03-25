class List
  include Mongoid::Document
  field :name, :type => String

  embedded_in :user
  embeds_many :songs
end