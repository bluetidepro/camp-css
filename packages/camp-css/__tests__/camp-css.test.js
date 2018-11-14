import fs from 'fs'
import test from 'ava'
import sass from 'node-sass'

test('marketing-camp is able to be compiled by node-sass', t => {
  t.plan(1)

  const scss = fs.readFileSync('scss/marketing-camp.scss', 'utf8')

  t.notThrows(() => {
    sass.renderSync({
      data: scss,
      includePaths: ['scss', 'node_modules'],
    })
  })
})

test('product-camp is able to be compiled by node-sass', t => {
  t.plan(1)

  const scss = fs.readFileSync('scss/product-camp.scss', 'utf8')

  t.notThrows(() => {
    sass.renderSync({
      data: scss,
      includePaths: ['scss', 'node_modules'],
    })
  })
})
