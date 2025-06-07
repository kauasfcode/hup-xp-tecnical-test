import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // Diretório raiz do projeto
  rootDir: '.',

  // Test environment para Node.js (NestJS roda no Node)
  testEnvironment: 'node',

  // Extensões dos arquivos de teste
  moduleFileExtensions: ['js', 'json', 'ts'],

  // Padrão dos arquivos de teste
  testRegex: '.*\\.spec\\.ts$',

  // Transformação do TypeScript via ts-jest
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },

  // Mapeamento de aliases (import 'src/...' funciona)
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },

  // Diretórios a ignorar nos testes
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  // Para limpar mocks automaticamente
  clearMocks: true,

  // Cobertura de código (opcional)
  collectCoverage: true,
  coverageDirectory: 'coverage',

  // Para mostrar relatórios legíveis na cobertura
  coverageReporters: ['text', 'lcov'],

  // Configurações específicas do ts-jest
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      // Se você quiser habilitar diagnóstico detalhado
      diagnostics: false,
    },
  },
};

export default config;