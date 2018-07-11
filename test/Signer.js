import { expect } from 'chai'

import scnnr from '../dist/scnnr.esm'

describe('Signer', () => {
  const apiKey = 'dummy-key'
  const signer = new scnnr.Signer(apiKey)

  describe('constructor', () => {
    it('should receive an API key', () => {
      expect(signer.apiKey).to.equal(apiKey)
    })
  })

  describe('interceptRequest', () => {
    it('sets x-api-key header', () => {
      return signer.interceptRequest({ headers: {} })
        .then((config) => expect(config.headers['x-api-key']).to.equal(apiKey))
    })
  })
})
