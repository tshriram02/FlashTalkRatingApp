#Represents actual ratings
class Rating < ActiveRecord::Base
  attr_accessor :comments
  attr_accessor :rating_value
end
