import styled from 'styled-components'

const Grid = (props) => {
  const { is_container, children, is_flex } = props
  const styles = {
    is_container,
    is_flex,
  }

  return (
    <GridBox {...styles}>
      { children }
    </GridBox>
  )
}

Grid.defaultProps = {
  is_container: false, is_flex: false
}


const GridBox = styled.div`
  ${(props) => props.is_container && `max-width: 1264px; margin: 0 auto;`}
  ${(props) => props.is_flex && `max-width: 1264px; margin: 0 auto;`}
`

export default Grid