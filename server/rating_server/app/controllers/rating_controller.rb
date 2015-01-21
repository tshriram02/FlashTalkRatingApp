#To store rating data
class RatingController < ApplicationController
  def post
    @rating = Rating.new
    p 111111
    p params[:comments]
    @rating[:comments] = params[:comments]
    @rating[:rating_value] = params[:ratingValue]
    @rating.save
  end
end
