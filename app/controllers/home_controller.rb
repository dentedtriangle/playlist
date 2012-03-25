class HomeController < ApplicationController
  expose(:user)
  expose(:lists) { user.lists }
  expose(:list)
  expose(:songs) { list.songs }
  expose(:song)

  def index
  end

  def play
  end

  def pause
  end

  def next
  end

  def previous
  end

  def shuffle
  end

end