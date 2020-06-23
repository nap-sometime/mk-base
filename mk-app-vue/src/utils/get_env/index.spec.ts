import { getEnv } from "."

it('should return @mk/x', () => {
	expect(getEnv('npm_package_name')).toBe('@mk/x')
})