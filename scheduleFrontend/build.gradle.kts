
plugins {
  id("com.moowork.node") version "1.3.1"
}

group = "de.rbrsoft"
version = "0.0.1"

node {
  setProperty("version", "16.1.0")
  setProperty("npmVersion", "6.14.13")
  setProperty("download", false)

  workDir = file("${project.buildDir}/node")
  nodeModulesDir = file("${project.projectDir}")
}

task<com.moowork.gradle.node.npm.NpmTask>("build") {
  setArgs(listOf("run", "build"))
  dependsOn("npmInstall")
}
