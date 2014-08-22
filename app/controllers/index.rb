get '/' do
  erb :index
end

post '/' do
  api = Brewskis::Client.new(params)
  brewskis = api.find_locations
  # p brewskis
  @breweries = brewskis.parsed_response["data"]
  p @breweries
  p "===================="
  p @breweries[1]["brewery"]["images"]["icon"]
  p "===================="
  erb :index
end

# grabs params for zipcode
post '/beers' do

end
