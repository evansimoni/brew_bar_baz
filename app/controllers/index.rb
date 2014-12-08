get '/' do
  erb :index
end

post '/' do
  api = Brewskis::Client.new(params)
  brewskis = api.find_locations
  @breweries = brewskis.parsed_response["data"]
  p @breweries
  erb :index
end