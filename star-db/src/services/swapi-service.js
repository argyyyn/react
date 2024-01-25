export default class SwapiService {
  _apiBase = 'https://swapi.dev/api'

  async getResource (url) {
    const res = await fetch(this._apiBase + url)
    if (!res.ok)
      throw new Error(`Could not fetch ${url} received ${res.status}`)
    const body = await res.json()
    return body
  }

  async getAllPeople () {
    const res = await this.getResource('/people/')
    return res.results.map(person => this._transformPerson(person))
  }

  async getPerson (id) {
    const res = await this.getResource('/people/' + id)
    return this._transformPerson(res)
  }

  async getAllPlanets () {
    const res = await this.getResource('/planets/')
    return res.results.map(this._transformPlanet())
  }

  async getPlanet (id) {
    const planet = await this.getResource('/planets/' + id)
    return this._transformPlanet(planet)
  }

  async getAllStarships () {
    const res = await this.getResource('/starships/')
    return res.results.map(starship => this._transformStarship(starship))
  }

  async getStarship (id) {
    const res = await this.getResource('/starships/' + id)
    res._transformStarship(res)
  }

  _extractId (item) {
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1]
  }

  _transformPlanet (planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarship (starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transformPerson (person) {
    return {
      iid: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  }
}