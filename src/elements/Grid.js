import React from 'react';
import styled from 'styled-components'

const Grid = (props) => {
    const { is_container, children } = props 
    const styles = {
        is_container
    }

    return (
        <div {...styles}>
            {children}
        </div>
    );
};

Grid.defaultPorps = {

}

const GridBox = styled.div`
    ${(props)=> props.is_container && `max-width: 1264px; margin: 0px auto`}
`

export default Grid;