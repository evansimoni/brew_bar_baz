get '/' do

  api = Brewskis::Client.new
  @breweries = api.find_locations
  # p @breweries.parsed_response["data"]
  @breweries = @breweries.parsed_response["data"]
  p @breweries.to_json["latitude"]
  # p @breweries.to_json
  # JSON.parse(@breweries)
  erb :index
end

# grabs params for lat and lon
