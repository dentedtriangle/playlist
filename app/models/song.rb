class Song
  include Mongoid::Document
  field :title, :type => String
  field :artist, :type => String
  field :genre, :type => String
  field :data, :type => Binary

  embedded_in :list
end
