// Copyright 2015-present 650 Industries. All rights reserved.
package abi44_0_0.expo.modules.sensors.services

import android.content.Context
import android.hardware.Sensor
import abi44_0_0.expo.modules.interfaces.sensors.services.BarometerServiceInterface
import abi44_0_0.expo.modules.core.interfaces.InternalModule

class BarometerService(reactContext: Context?) : SubscribableSensorService(reactContext), InternalModule, BarometerServiceInterface {
  override val sensorType: Int = Sensor.TYPE_PRESSURE

  override fun getExportedInterfaces(): List<Class<*>> {
    return listOf<Class<*>>(BarometerServiceInterface::class.java)
  }
}
