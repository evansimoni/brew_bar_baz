module Brewskis
  class Client
    include HTTParty
    base_uri "http://api.brewerydb.com/v2/"

    def initialize(locality)
      @locality = locality
    end

    def find_locations
      locations = self.class.get('/locations', {
        query: { key: "ef1069aca2f731647326ccfbb58a47d4", locality: @locality
        }
        })
    end

  end
end
