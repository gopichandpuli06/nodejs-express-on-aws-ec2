# frozen_string_literal: true

source "https://rubygems.org"
gemspec

if RUBY_VERSION < "3"
  gem "minitest", ">= 5.15.0", "< 5.16"
else
  gem "minitest", ">= 5.15.0"
end

# We need a newish Rake since Active Job sets its test tasks' descriptions .
gem "rake", ">= 13"

gem "sprockets-rails", ">= 2.0.0"
gem "propshaft", ">= 0.1.7"
gem "capybara", ">= 3.38"
gem "selenium-webdriver", ">= 4.0.0"