import {resolver} from '@orion-js/app'

export default ({Users}) => ({
  user: resolver({
    name: 'user',
    returns: Users.model,
    resolve: async function(session) {
      const user = await Users.findOne(session.userId)
      return user
    }
  })
})
