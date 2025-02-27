// file: jest.config.js
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // <= setup file here 
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);