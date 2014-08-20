module Brewskis

  class Client
    include HTTParty

    base_uri "http://api.brewerydb.com/v2/"

    def initialize
    end

    def locations
      # self.class.get('/locations', {
      #   query: { key: "ef1069aca2f731647326ccfbb58a47d4", locality: "San Francisco", latitude: "37.7846330", longitude: "-122.3974140"}
      #   })
    end

  end
end
