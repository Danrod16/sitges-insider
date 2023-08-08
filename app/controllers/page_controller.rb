class PageController < ApplicationController
	skip_before_action :authenticate_user!, :only => [:pricing, :about]

	def pricing
	end

	def about
	end

	def webcam
	end

end
