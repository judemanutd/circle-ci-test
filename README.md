# Playwright Circle CI Starter Project

This project demonstrates how to set up Playwright end-to-end testing with Circle CI integration, ensuring that test reports and artifacts are visible even when tests fail.

## Features

- 🎭 **Playwright Testing Framework** - Modern, reliable end-to-end testing
- 🔄 **Circle CI Integration** - Automated testing on every commit
- 📊 **Rich Reporting** - HTML reports, JUnit XML, and JSON outputs
- 📸 **Failure Artifacts** - Screenshots, videos, and traces on test failures
- 🌐 **Multi-browser Testing** - Chrome, Firefox, and Safari support
- 🔧 **API Testing** - Examples of testing REST APIs
- 📱 **Mobile Testing Ready** - Configured for mobile viewport testing

## Getting Started

### Prerequisites

- Node.js 16+ 
- pnpm (recommended) or npm

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Install Playwright browsers:
```bash
pnpm install:browsers
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in headed mode (see browser)
pnpm test:headed

# Run tests with UI mode
pnpm test:ui

# Debug tests
pnpm test:debug

# Rerun only failed tests (after a previous test run)
pnpm test:failed

# Show test report
pnpm report
```

## Circle CI Integration

This project is configured with Circle CI to:

1. **Run tests automatically** on every push
2. **Generate multiple report formats**:
   - HTML report for detailed visual analysis
   - JUnit XML for Circle CI test summaries
   - JSON for programmatic analysis
3. **Store artifacts** including:
   - Test reports accessible via Circle CI UI
   - Screenshots from failed tests
   - Videos of test execution
   - Trace files for debugging
4. **Continue execution** even if tests fail to ensure reports are generated
5. **Support for rerunning failed tests** using Circle CI's test splitting and rerun functionality

### Key Circle CI Features

- **Test Results Integration**: JUnit XML results show up in Circle CI's Tests tab
- **Artifact Storage**: All reports and failure artifacts are stored and accessible
- **Failure Handling**: Reports are generated and stored even when tests fail
- **Browser Support**: Uses CircleCI's browser-enabled Docker image
- **Test Splitting**: Uses Circle CI's test glob and splitting functionality for parallel execution
- **Rerun Failed Tests**: Supports Circle CI's native rerun failed tests feature

### Rerunning Failed Tests

Circle CI automatically tracks which tests failed in previous runs. To rerun only the failed tests:

1. **In Circle CI UI**: Click the "Rerun failed tests" button on a failed workflow
2. **Locally**: Use `pnpm test:failed` after running tests at least once
3. **Manual**: The configuration uses Circle CI's test splitting with `circleci tests glob` and `circleci tests run`

The configuration includes:
- Test file globbing: `circleci tests glob "tests/**/*.spec.js"`
- Test splitting by timings for optimal parallel execution
- JUnit reporter for proper test result tracking

## Test Structure

### Example Tests (`tests/example.spec.js`)
- Basic navigation and interaction tests
- Intentional failure test to demonstrate error reporting
- Search functionality testing

### API Tests (`tests/api.spec.js`)
- REST API testing examples
- GET and POST request validation
- Error handling scenarios

## Configuration

### Playwright Configuration (`playwright.config.js`)
- Multiple reporters for comprehensive output
- Failure artifacts (screenshots, videos, traces)
- Multi-browser configuration
- CI-optimized settings

### Circle CI Configuration (`.circleci/config.yml`)
- Node.js environment with browsers
- Playwright browser installation
- Test execution with artifact collection
- Report storage configuration

## Viewing Reports in Circle CI

After tests run in Circle CI:

1. **Test Summary**: Go to the "Tests" tab to see passed/failed test counts
2. **HTML Report**: Go to "Artifacts" tab → `playwright-report/index.html`
3. **Screenshots/Videos**: Go to "Artifacts" tab → `test-results/` folder
4. **Raw Results**: Available in both XML and JSON formats

## Customization

### Adding New Tests
Create new `.spec.js` files in the `tests/` directory. Playwright will automatically discover and run them.

### Browser Configuration
Modify the `projects` section in `playwright.config.js` to add/remove browsers or devices.

### Reporting
Adjust the `reporter` configuration in `playwright.config.js` to customize output formats.

### Circle CI
Modify `.circleci/config.yml` to adjust:
- Docker image versions
- Resource allocation
- Artifact storage paths
- Additional workflow steps

## Package Manager

This project uses pnpm for faster, more efficient dependency management. The `pnpm-lock.yaml` file ensures reproducible builds across environments.

## Troubleshooting

### Common Issues

1. **Browser Installation Fails**: Ensure you're using the correct Docker image with browser support in Circle CI
2. **Tests Timeout**: Increase timeout values in playwright.config.js for slower CI environments
3. **Artifacts Not Visible**: Check that artifact paths in Circle CI config match output directories in Playwright config

### Debug Failed Tests

1. Check the HTML report in Circle CI artifacts
2. Download trace files and open with `npx playwright show-trace trace.zip`
3. Review screenshots and videos from the test-results artifacts

## Best Practices

1. **Stable Selectors**: Use data-testid attributes for reliable element selection
2. **Wait Strategies**: Use Playwright's auto-waiting features instead of hard waits
3. **Test Isolation**: Each test should be independent and not rely on other tests
4. **Page Object Model**: For larger test suites, consider implementing page objects
5. **CI Optimization**: Use fewer workers and retries in CI environments

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass locally
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
