import React from 'react';
import { Stack } from '@mui/material';

import {category} from '../../constants/category';
import {colors} from '../../constants/colors';

const Category = ({onSelectCategory}) => {
    return (
        <Stack direction={'row'} sx={{overflowX: 'scroll'}}>
            {
                category.map((item) => {
                    return (
                        <button 
                            key={item.name}
                            className='category-btn'
                            style={{
                                borderRadius: 0,

                            }}
                            value={item.name}
                            onClick={onSelectCategory}
                        >
                            <span style={{color: colors.secondary, marginRight: '15px'}}>
                                {item.icon}
                            </span>
                            <span style={{opacity: 1}}>
                                {item.name}
                            </span>
                    </button>
                    );
                })
            }
        </Stack>
    );
}

export default Category;