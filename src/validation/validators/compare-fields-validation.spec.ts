import { InvalidParamError } from '../../presentation/errors'
import { ComparedFieldsValidation } from './compare-fields-validation'

const makeSut = (): ComparedFieldsValidation => {
  return new ComparedFieldsValidation('field', 'fieldToCompare')
}

describe('CompareFields Validation', () => {
  test('Should returns a InvalidParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({
      field: 'any_name',
      fieldToCompare: 'wrong_value'
    })
    expect(error).toEqual(new InvalidParamError('fieldToCompare'))
  })

  test('Should not returns if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_name', fieldToCompare: 'any_name' })
    expect(error).toBeFalsy()
  })
})
