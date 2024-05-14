import * as quality from '../assignTestId'

describe('Quality Gate', () => {
  describe('assignTestId', () => {
    it('should test assignTestId', () => {
      const id = quality.assignTestId('Modal', 'Box')
      expect(id.testID).toBe(`Modal_Box`)
      expect(id.testID).toMatchSnapshot()
    })
  })

  describe('mockTestID', () => {
    it('should test MockId', () => {
      const id = quality.assignTestId('Modal', 'Box')
      const result = quality.mockTestID('Modal', 'Box')
      expect(result).toEqual(id.testID)
      expect(result).toMatchSnapshot()
    })
  })
})
