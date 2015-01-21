#To store rating data
class RatingController < ApplicationController
  def post
    @rating = Rating.new
    @rating[:comments] = params[:comments]
    @rating[:rating_value] = params[:ratingValue]
    @rating.save
  end
end
