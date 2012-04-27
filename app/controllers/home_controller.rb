class HomeController < ApplicationController
  expose(:user)
  #expose(:lists) { user.lists }
  #expose(:list)
  #expose(:songs) { list.songs }
  #expose(:song)

  def index
    @songs = [
      {:id => 1, :artist => "Coldplay", :title => "Fix You", :genre => ""},
      {:id => 1, :artist => "Modonna", :title => "Give it 2 me", :genre => ""},
      {:id => 1, :artist => "Mirror's Edge Theme Song", :title => "Still Alive", :genre => ""},
      {:id => 1, :artist => "Rihanna", :title => "Unfaithful with Lyrics", :genre => ""}
    ] 
    @lists = [
      {:id => 1, :name => "first"},
      {:id => 2, :name => "second"}
    ]
  end

end