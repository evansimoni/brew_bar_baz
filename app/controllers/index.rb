get '/' do
  erb :index
end

post '/' do
  api = Brewskis::Client.new(params)
  @breweries = api.find_locations
  @breweries = @breweries.parsed_response["data"]
  p @breweries
  erb :index
end

# grabs params for zipcode
