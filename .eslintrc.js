module.exports = {
  env: {
    browser: true,
    es2021: true
  },

  parserOptions: {
    ecmaFeature: {
      jsx: true
    },
    ecmVersion: 12,
    soureType: 'module'
  },

  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },

  extends: ['airbnb-base', 'prettier', 'plugin:react/recommended'],
  plugins: ['react', 'react-hooks', 'import', 'prettier', 'jsx-a11y'],

  rules: {
    // 불필요한 공수를 줄이기 위해 jsx 대신 js를 허용
    'react/jsx-filename-extension': 'off',

    // 사용하지 않는 변수 에러에서 경고로 변경
    'no-undef': 'warn',
    'no-unused-vars': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',

    // import React from 'react' 생략
    'react/react-in-jsx-scope': 'off',

    // { fnc: () => {} } 시 경고 표시,
    // { fnc() {} } 형태 권장
    'object-shorthand': 'warn',

    // 한 줄당 최대 글자 수
    'max-len': ['warn', { code: 100, ignoreComments: true }],

    // if 문 {} 생략 가능
    curly: 'off',

    // 객체 속성 따옴표 쓰지 않게
    'quote-props': ['error', 'as-needed'],

    // trailing comma 해제
    'comma-dangle': 'off',

    // JSX 속성에 홑따옴표 사용 가능
    'jsx-quotes': ['error', 'prefer-single'],

    // PropTypes 사용하지 않게 변경
    'react/prop-types': 'off',

    // 하나만 export 할때 무조건 default 로 해야하는 규칙 제거
    'import/prefer-default-export': 'off'
  }
};
