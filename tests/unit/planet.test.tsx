import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Planet } from '@/components/Planet'

const skill = {
  id: 'test',
  name: 'Test Skill',
  description: 'Desc',
  icon: 'code',
  color: '#fff',
  sizePx: 40,
  orbitRadiusRem: 7,
  orbitDurationSec: 6,
  hoverScale: 1.1,
  projects: ['A','B']
}

test('opens modal on click', async () => {
  render(<Planet {...skill} />)
  const btn = screen.getByRole('button')
  await userEvent.click(btn)
  const heading = await screen.findByRole('heading', { name: 'Test Skill' })
  expect(heading).toBeInTheDocument()
})