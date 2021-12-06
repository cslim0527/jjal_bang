import styled from 'styled-components'

const Grid = (props) => {
  const { is_container, children } = props
  const styles = {
    is_container
  }

  return (
    <GridBox {...styles}>
      { children }
    </GridBox>
  )
}

Grid.defaultProps = {
  is_container: false
}

const GridBox = styled.div`
  ${(props) => props.is_container && `max-width: 1264px; margin: 0 auto;`}
`

export default Grid;
