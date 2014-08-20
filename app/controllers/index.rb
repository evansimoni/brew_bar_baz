get '/' do
  api = Brewskis::Client.new
  @beer = api.locations
  p @beer
  erb :index
end
