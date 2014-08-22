get '/' do
  erb :index
end

post '/' do
  api = Brewskis::Client.new(params)
  brewskis = api.find_locations
  # p brewskis
  @breweries = brewskis.parsed_response["data"]
  p @breweries
  erb :index
end

# grabs params for zipcode, this route hasn't been activated yet
put '/beers/:id' do
  api = Brewskis::Client.new
  brews = api.find_beers(params[:id])
  p brews
  erb :index
end
