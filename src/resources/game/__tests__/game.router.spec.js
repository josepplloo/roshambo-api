import router from '../game.router'

describe('game router', () => {
  test('has crud routes', () => {
    const routes = [{ path: '/', method: 'get' }, { path: '/', method: 'post' }]

    routes.forEach(route => {
      const match = router.stack.find(
        s => s.route.path === route.path && s.route.methods[route.method]
      )
      expect(match).toBeTruthy()
    })
  })
})
