
plugins {
  id("com.moowork.node") version "1.2.0"
}

group = "de.rbrsoft"
version = "0.0.1"

node {
  version = "16.1.0"
  npmVersion = "6.14.13"
  download = false
  workDir = file("${project.buildDir}/node")
  nodeModulesDir = file("${project.projectDir}")
}

task<com.moowork.gradle.node.npm.NpmTask>("build") {
  setArgs(listOf("run", "build"))
  dependsOn("npmInstall")
}
